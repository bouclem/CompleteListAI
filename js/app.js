(function () {
  const searchInput = document.getElementById("search-input");
  const tagFilter = document.getElementById("tag-filter");
  const sortFilter = document.getElementById("sort-filter");
  const resetBtn = document.getElementById("reset-btn");
  const cardsContainer = document.getElementById("cards");
  const resultCount = document.getElementById("result-count");

  function getAllTags() {
    const tagSet = new Set();
    architectures.forEach((a) => a.tags.forEach((t) => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }

  function populateFilters() {
    getAllTags().forEach((tag) => {
      const opt = document.createElement("option");
      opt.value = tag;
      opt.textContent = tag;
      tagFilter.appendChild(opt);
    });
  }

  function sortItems(items, sortKey) {
    const sorted = [...items];
    switch (sortKey) {
      case "name-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "year-asc":
        sorted.sort((a, b) => a.year - b.year);
        break;
      case "year-desc":
        sorted.sort((a, b) => b.year - a.year);
        break;
    }
    return sorted;
  }

  function render() {
    const query = searchInput.value.trim().toLowerCase();
    const selectedTag = tagFilter.value;
    const sortKey = sortFilter.value;

    const filtered = architectures.filter((a) => {
      const matchesName = a.name.toLowerCase().includes(query);
      const matchesTag = !selectedTag || a.tags.includes(selectedTag);
      return matchesName && matchesTag;
    });

    const sorted = sortItems(filtered, sortKey);

    resultCount.textContent =
      sorted.length === 0
        ? "No architectures found"
        : `${sorted.length} architecture${sorted.length > 1 ? "s" : ""} found`;

    cardsContainer.innerHTML = "";

    if (sorted.length === 0) {
      cardsContainer.innerHTML =
        '<p class="empty-state">No results match your filters.</p>';
      return;
    }

    sorted.forEach((a) => {
      const card = document.createElement("article");
      card.className = "card";

      const tagsHtml = a.tags
        .map((t) => `<span class="tag">${t}</span>`)
        .join("");

      card.innerHTML = `
        <div class="card-header">
          <span class="card-name">${a.name}</span>
          <span class="card-year">${a.year}</span>
        </div>
        <p class="card-description">${a.description}</p>
        <div class="card-tags">${tagsHtml}</div>
        <a class="card-link" href="${a.paper}" target="_blank" rel="noopener">View paper &rarr;</a>
      `;

      cardsContainer.appendChild(card);
    });
  }

  function resetFilters() {
    searchInput.value = "";
    tagFilter.value = "";
    sortFilter.value = "name-asc";
    render();
  }

  searchInput.addEventListener("input", render);
  tagFilter.addEventListener("change", render);
  sortFilter.addEventListener("change", render);
  resetBtn.addEventListener("click", resetFilters);

  populateFilters();
  render();
})();
