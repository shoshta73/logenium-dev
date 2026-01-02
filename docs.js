// SPDX-FileCopyrightText: 2026 Logenium Authors and Contributors
// SPDX-License-Identifier: BSD-3-Clause

document.addEventListener('DOMContentLoaded', () => {
  const versionButton = document.getElementById('versionButton');
  const subprojectsContainer = document.getElementById('subprojectsContainer');

  if (versionButton && subprojectsContainer) {
    versionButton.addEventListener('click', () => {
      versionButton.classList.toggle('active');
      subprojectsContainer.classList.toggle('expanded');
    });
  }

  const corelibButton = document.getElementById('corelibButton');
  const corelibDocsContainer = document.getElementById('corelibDocsContainer');

  if (corelibButton && corelibDocsContainer) {
    corelibButton.addEventListener('click', () => {
      corelibButton.classList.toggle('active');
      corelibDocsContainer.classList.toggle('expanded');
    });
  }
});
