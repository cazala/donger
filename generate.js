/*
  1. open http://dongerlist.com/
  2. open the console
  3. paste and run this code to get all the dongers
  4. ╰( ◕ ᗜ ◕ )╯
*/

// get array of dongers in one page for one category
function getDongersByCategoryAndPage(category, page) {
  return fetch(`/category/${category}/page/${page}`)
    .then(r => r.text())
    .then(a => a
      .split('<textarea class="donger"')
      .slice(1)
      .map(x => x.split('</textarea>')[0]
        .split('>')[1]
      ));
}

// get array of all dongers for one category
function getDongersByCategory(category, page, allDongers) {
  return getDongersByCategoryAndPage(category, page || 1)
    .then(dongers => {
      return dongers.length > 0
        ? getDongersByCategory(category, (page || 1) + 1, (allDongers || []).concat(dongers))
        : allDongers;
    });
}

// get array of all categories
function getCategories() {
  return fetch('/')
    .then(r => r.text())
    .then(a => a
      .split('<option value="http://dongerlist.com/category/')
      .slice(1, 52)
      .map(x => x
        .split('"')[0]
      ))
}

// get all dongers from all the categories
function getDongers() {
  return getCategories().then(categories => {
    return Promise.all(
      categories.map(x => getDongersByCategory(x).then(categoryDongers => {
        return { category: x, dongers: categoryDongers }
      }))
    ).then(allDongers => {
      var dongers = {};
      allDongers.forEach(d => {
        dongers[d.category] = d.dongers;
      })
      return dongers;
    })
  })
}

// . * ･ ｡ﾟ☆━੧༼ •́ ヮ •̀ ༽୨
getDongers().then(dongers => console.log(JSON.stringify(dongers, null, 2)));