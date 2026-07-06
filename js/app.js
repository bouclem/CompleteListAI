(function () {
  const searchInput = document.getElementById("search-input");
  const tagFilter = document.getElementById("tag-filter");
  const yearFilter = document.getElementById("year-filter");
  const resetBtn = document.getElementById("reset-btn");
  const cardsContainer = document.getElementById("cards");
  const resultCount = document.getElementById("result-count");

  function getAllTags() {
    const tagSet = new Set();
    architectures.forEach((a) => a.tags.forEach((t) => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }

  function getAllYears() {
    const yearSet = new Set();
    architectures.forEach((a) => yearSet.add(a.year));
    return Array.from(yearSet).sort((a, b) => b - a);
  }

  function populateFilters() {
    getAllTags().forEach((tag) => {
      const opt = document.createElement("option");
      opt.value = tag;
      opt.textContent = tag;
      tagFilter.appendChild(opt);
    });

    getAllYears().forEach((year) => {
      const opt = document.createElement("option");
      opt.value = year;
      opt.textContent = year;
      yearFilter.appendChild(opt);
    });
  }

  function render() {
    const query = searchInput.value.trim().toLowerCase();
    const selectedTag = tagFilter.value;
    const selectedYear = yearFilter.value;

    const filtered = architectures.filter((a) => {
      const matchesName = a.name.toLowerCase().includes(query);
      const matchesTag = !selectedTag || a.tags.includes(selectedTag);
      const matchesYear =
        !selectedYear || a.year === parseInt(selectedYear, 10);
      return matchesName && matchesTag && matchesYear;
    });

    resultCount.textContent =
      filtered.length === 0
        ? "No architectures found"
        : `${filtered.length} architecture${filtered.length > 1 ? "s" : ""} found`;

    cardsContainer.innerHTML = "";

    if (filtered.length === 0) {
      cardsContainer.innerHTML =
        '<p class="empty-state">No results match your filters.</p>';
      return;
    }

    filtered.forEach((a) => {
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
    yearFilter.value = "";
    render();
  }

  searchInput.addEventListener("input", render);
  tagFilter.addEventListener("change", render);
  yearFilter.addEventListener("change", render);
  resetBtn.addEventListener("click", resetFilters);

  populateFilters();
  render();
})();
