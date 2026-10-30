"use strict";

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");
const modal = document.querySelector("[data-project-modal]");
const modalDialog = modal.querySelector(".modal-dialog");
const modalClose = modal.querySelector("[data-modal-close]");
let lastFocusedElement = null;

document.querySelector("[data-year]").textContent = String(new Date().getFullYear());

function closeMenu() {
  primaryNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.querySelector(".menu-label").textContent = "메뉴";
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.querySelector(".menu-label").textContent = isOpen ? "메뉴" : "닫기";
  primaryNav.classList.toggle("is-open", !isOpen);
});

primaryNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

function openModal() {
  lastFocusedElement = document.activeElement;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  modalClose.focus();
}

function closeModal() {
  if (modal.hidden) return;
  modal.hidden = true;
  document.body.classList.remove("modal-open");
  if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
}

document.querySelector("[data-open-project-help]").addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);
modal.querySelector("[data-modal-dismiss]").addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!modal.hidden) closeModal();
    else if (menuToggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuToggle.focus();
    }
  }

  if (event.key === "Tab" && !modal.hidden) {
    const focusable = [...modalDialog.querySelectorAll("button, textarea")];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

const copyButton = document.querySelector("[data-copy-email]");
const copyFeedback = document.querySelector("[data-copy-feedback]");
let feedbackTimer;

copyButton.addEventListener("click", async () => {
  const email = copyButton.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    copyFeedback.textContent = "이메일 주소를 복사했습니다.";
  } catch {
    const fallback = document.createElement("textarea");
    fallback.value = email;
    fallback.setAttribute("readonly", "");
    fallback.style.position = "fixed";
    fallback.style.opacity = "0";
    document.body.append(fallback);
    fallback.select();
    const copied = document.execCommand("copy");
    fallback.remove();
    copyFeedback.textContent = copied
      ? "이메일 주소를 복사했습니다."
      : "복사할 수 없습니다. 이메일 주소를 직접 선택해 주세요.";
  }
  window.clearTimeout(feedbackTimer);
  feedbackTimer = window.setTimeout(() => {
    copyFeedback.textContent = "";
  }, 3500);
});
