// SPDX-FileCopyrightText: 2026 Logenium Authors and Contributors
// SPDX-License-Identifier: BSD-3-Clause

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const slider = document.querySelector('.toggle-slider');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  if (slider) {
    slider.textContent = '🌙';
  }
}

// Toggle theme on click
themeToggle?.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Update icon
  if (body.classList.contains('dark-mode')) {
    if (slider) {
      slider.textContent = '🌙';
    }
    localStorage.setItem('theme', 'dark');
  } else {
    if (slider) {
      slider.textContent = '☀️';
    }
    localStorage.setItem('theme', 'light');
  }
});
