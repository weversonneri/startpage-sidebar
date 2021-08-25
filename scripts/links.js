function links() {
  let linkElement = document.querySelector('.links-wrapper');

  CONFIG.links.map((item) => {
    let link = `
        <a
          href="${item.link}"
          class="link-item"
        >
          ${item.name}
        </a>
    `;

    linkElement.insertAdjacentHTML('beforeend', link);
  });
}

links();