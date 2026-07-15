let reachStatsXec = {
  "Total Followers": "100K+",
  "Creator Network Members": "450+",
  "Total Viewer Reach": "3M+",
  "Actions Taken from our Tools": "445M+",
};

let reachStats = {
  "Total Followers": "1.9M+",
  "Creator Network Members": "450+",
  "Total Viewer Reach": "500M+",
  "Actions Taken from our Tools": "445M+",
};

let metricsDiv = $("#metrics-reach");

for (let key in reachStats) {
  if (reachStats.hasOwnProperty(key)) {
    let value = reachStats[key];

    let statDiv = $('<div class="reach-stat"></div>');

    let valueP = $("<h2></h2>").text(value);

    let keyP = $("<p></p>").text(key);

    statDiv.append(valueP);
    statDiv.append(keyP);

    metricsDiv.append(statDiv);
  }
}

let metricsDivXec = $("#metrics-reach-xec");

for (let key in reachStatsXec) {
  if (reachStatsXec.hasOwnProperty(key)) {
    let valueXec = reachStatsXec[key];

    let statDivXec = $('<div class="reach-stat"></div>');

    let valuePXec = $("<h2></h2>").text(valueXec);

    let keyPXec = $("<p></p>").text(key);

    statDivXec.append(valuePXec);
    statDivXec.append(keyPXec);

    metricsDivXec.append(statDivXec);
  }
}

//IG Preview Function

$(document).ready(function () {
  const apiUrl =
    "https://graph.facebook.com/v22.0/17841443650094834/media?fields=media_type,media_url,thumbnail_url,permalink&limit=6&access_token=EAAN1QkhMkfwBPfRsshnVFFgbVlaNXsn8TTJQBGVOIYvXXQLn9dcDg0QB2SYwbZAZBFZCk26gexlC4PnTZACRvZBpBBO6LsZAf7XiFnSSxb6GI1c9zHAnJTN31SgOeHLIzgIQZBbe6Gchqe7bJiLxRYZCfCqlqB2wVBaszkgxtifrULhpiJn9KVMcxE1NIhNBILaaHx8ku4OEALSG";

  const apiUrlxec =
    "https://graph.facebook.com/v22.0/17841460644614924/media?fields=media_type,media_url,thumbnail_url,permalink&limit=6&access_token=EAAN1QkhMkfwBPfRsshnVFFgbVlaNXsn8TTJQBGVOIYvXXQLn9dcDg0QB2SYwbZAZBFZCk26gexlC4PnTZACRvZBpBBO6LsZAf7XiFnSSxb6GI1c9zHAnJTN31SgOeHLIzgIQZBbe6Gchqe7bJiLxRYZCfCqlqB2wVBaszkgxtifrULhpiJn9KVMcxE1NIhNBILaaHx8ku4OEALSG";

  $.getJSON(apiUrl, function (data) {
    const $feed = $("#instagram-feed");
    $feed.empty();

    $.each(data.data, function (i, post) {
      let imageUrl = "";

      if (
        post.media_type === "IMAGE" ||
        post.media_tresype === "CAROUSEL_ALBUM"
      ) {
        imageUrl = post.media_url;
      } else if (post.media_type === "VIDEO") {
        imageUrl = post.thumbnail_url;
      } else {
        return; // skipping unsupported media types
      }

      // If this is the 6th (last) image, give it an id
      const isLast = i === 5; // zero-based index
      const postHtml = `
        <div class="instagram-feed-post">
          <a href="${post.permalink}" target="_blank">
            <img src="${imageUrl}" ${isLast ? 'id="last-img"' : ""}>
          </a>
        </div>
      `;
      $feed.append(postHtml);
    });
  }).fail(function (xhr, status, error) {
    console.error("Instagram API Error:", xhr.responseJSON || error);
  });

  $.getJSON(apiUrlxec, function (data) {
    const $feed = $("#instagram-feed-xec");
    $feed.empty();

    $.each(data.data, function (i, post) {
      let imageUrl = "";

      if (post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM") {
        imageUrl = post.media_url;
      } else if (post.media_type === "VIDEO") {
        imageUrl = post.thumbnail_url;
      } else {
        return; // skipping unsupported media types
      }

      // If this is the 6th (last) image, give it an id
      const isLast = i === 5; // zero-based index
      const postHtml = `
        <div class="instagram-feed-post">
          <a href="${post.permalink}" target="_blank">
            <img src="${imageUrl}" ${isLast ? 'id="last-img"' : ""}>
          </a>
        </div>
      `;
      $feed.append(postHtml);
    });
  }).fail(function (xhr, status, error) {
    console.error("Instagram API Error:", xhr.responseJSON || error);
  });
});

// $(window).on("load resize", function() {
//   var $container = $("#instagram-feed");
//   var $lastImg = $("#last-img");

//   if ($lastImg.position().left + $lastImg.outerWidth() > $container.width()) {
//     $lastImg.hide();
//   } else {
//     $lastImg.show();
//   }
// });

//Append Collaborators

let collaborators = [
  {
    name: "Amazon Labor Union",
    photo: "alu.png",
    link: "https://www.amazonlaborunion.org/",
  },
  {
    name: "Athena",
    photo: "athena.png",
    link: "https://athenaforall.org",
  },
  {
    name: "Immirgant Legal Resource Center",
    photo: "ilrc.png",
    link: "https://www.ilrc.org/",
  },
  {
    name: "Lucha",
    photo: "lucha.png",
    link: "https://www.luchaaz.org/",
  },
  {
    name: "March for Our Lives",
    photo: "mfol.png",
    link: "https://marchforourlives.org/",
  },
  {
    name: "People VS Fossil Fuels",
    photo: "pvff.png",
    link: "https://peoplevsfossilfuels.org/",
  },
  {
    name: "Screen Actors Guild",
    photo: "sag.png",
    link: "https://www.sagaftra.org/",
  },
  {
    name: "Service Employees International Union",
    photo: "seiu.png",
    link: "https://www.seiu.org/",
  },
  {
    name: "Sunrise Movement",
    photo: "sunrise.svg.png",
    link: "https://www.sunrisemovement.org/",
  },
  {
    name: "Starbucks Workers United",
    photo: "swu.png",
    link: "https://sbworkersunited.org/",
  },
  {
    name: "Treeage",
    photo: "treeage.png",
    link: "https://www.treeageteam.org",
  },
  {
    name: "United We Dream",
    photo: "uwd.png",
    link: "https://unitedwedream.org",
  },
  {
    name: "Writers Guild of America",
    photo: "wga.png",
    link: "https://www.wga.org",
  },
  {
    name: "Youth Power Project",
    photo: "ypp.png",
    link: "https://www.youthpowerproject.org/",
  },
];

collaborators.forEach((collab) => {
  const $a = $("<a>", {
    href: collab.link,
    target: "_blank",
    rel: "noopener noreferrer",
    title: collab.name,
  });

  const $img = $("<img>", {
    src: `assets/logos/collaborators/${collab.photo}`,
    alt: `${collab.name} Logo`,
  });

  $a.append($img);
  $("#collaborators-list").append($a.clone(true, true));
  $("#collaborators-list2").append($a);
});

// PRESS, STATEMENTS, INITIATIVES CONTENT POPULATION SECTION

const BASE_URL = "https://get-statement-data-893947194926.us-central1.run.app";
const statements = BASE_URL + "/get_statements";
const press = BASE_URL + "/get_press";
const initiatives = BASE_URL + "/get_initiatives";

const response = async (page) => {
  const r = await fetch(page);
  const data = await r.json();
  // console.log(data)
  return data;
};

// Render Statements Feed: OUR PRESS RELEASES
// async function renderStatements() {

//   const feedData = await response(statements)

//   console.log(feedData)
// const feedContainer = document.getElementById('statements-feed');
// clear previous content:
// feedContainer.innerHTML = '';

// Sort by newest date
// const sortedFeed = feedData.sort((a, b) => new Date(b.date) - new Date(a.date));

// const feedHTML = sortedFeed.map(item => {
// Create clickable topic links (maybe idk if this would be useful)
//     const topicLinks = item.topics.map(topic =>
//       `<a href="#" class="feed-topic">${topic}</a>`
//     ).join(' ');

//     return `
//     <a href="${item.url}" target="_blank" rel="noopener noreferrer">
//         <div class="feed-background"></div>
//         <div class="feed-preview">
//           <img class="feed-img" src="${item.imgSrc}" alt="">
//           <div class="feed-text">
//             <p class="feed-date">${item.date}</p>
//             <h2 class="feed-title">${item.title}</h2>
//             <p class="feed-description">${item.description}</p>
//             <div class="feed-topics">${topicLinks}</div>
//           </div>
//         </div>
//       </a>
//     `;
//   }).join('');

//   feedContainer.innerHTML = feedHTML;
// }

// Render Shortened Initiatives
// async function renderSummaryInitiatives() {
//   const feedData = await response(initiatives);
// id from html page
// const feedContainer = document.querySelector('#landing-initiatives');
// if (!feedContainer) return;
// feedContainer.innerHTML = '';
// sort by newest ADDED date, not initiative launch date
// const sortedFeed = feedData.sort((a, b) => new Date(b.date) - new Date(a.date));

// const feedHTML = sortedFeed.map((item, index) => {
// Alternate the order of the items visually for zig zag!!!
//     const isReverse = index % 2 !== 0 ? ' reverse' : '';

//     return `
//     <a href="${item.url}" target="_blank" class = "initiative-link">
//       <div class="workflow-item${isReverse}">
//         <div class="description">
//           <h2>${item.title}</h2>
//           <p>${item.summary}</p>
//         </div>
//       </div>
//     `;
//   }).join('');

//   feedContainer.innerHTML = feedHTML;
// } // END renderInitiatives
// Render Initiatives Feed: OUR WORK HTML CONTENT NEED IMAGES
// async function renderInitiatives() {
//   const feedData = await response(initiatives);
//   // id from html page
//   const feedContainer = document.querySelector('#landing-initiatives');
//   if (!feedContainer) return;
//   feedContainer.innerHTML = '';
//   // sort by newest ADDED date, not initiative launch date
//   const sortedFeed = feedData.sort((a, b) => new Date(b.date) - new Date(a.date));

//   const feedHTML = sortedFeed.map((item, index) => {
//     // Alternate the order of the items visually for zig zag!!!
//     const isReverse = index % 2 !== 0 ? ' reverse' : '';

//     return `
//     <a href="${item.url}" target="_blank" class = "initiative-link">
//       <div class="workflow-item${isReverse}">
//       <img class="feed-img" src="${item.imgSrc}" alt="">
//         <div class="description">
//           <h2>${item.title}</h2>
//           <p>${item.summary}</p>
//         </div>
//       </div>
//     `;
//   }).join('');

//   feedContainer.innerHTML = feedHTML;
// } // END renderInitiatives

// Render Press Feed: PRESS HTML CONTENT ALSO NEED IMAGES
// async function renderPress() {
//   const feedData = await response(press);

//   const feedContainer = document.getElementById('press-feed');
//   if (!feedContainer) return;
//   feedContainer.innerHTML = '';

//   const sortedFeed = feedData.sort((a, b) => new Date(b.date) - new Date(a.date));

//   const feedHTML = sortedFeed.map(item => {
//     return `
//       <a href="${item.url}" target="_blank" rel="noopener noreferrer">
//         <div class="feed-background"></div>
//         <div class="feed-preview">
//         <img class="feed-img" src="${item.imgSrc}" alt="">
//           <div class="feed-text">
//             <p class="feed-date">${item.date}</p>
//             <h2 class="feed-title">${item.title}</h2>
//             <p class="feed-description">${item.publication}</p>
//           </div>
//         </div>
//       </a>
//     `;
//   }).join('');

//   feedContainer.innerHTML = feedHTML;
// } // END renderPress

// Render latest 3 Press
// async function renderLatestPress() {
//   const feedData = await response(press);

//   const feedContainer = document.getElementById('latest-press');
//   if (!feedContainer) return;
//   feedContainer.innerHTML = '';

//   const sortedFeed = feedData.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

//   const feedHTML = sortedFeed.map(item => {
//     return `
//       <a href="${item.link}" target="_blank" rel="noopener noreferrer">
//         <div class="latest-feed-preview">
//         <img class="feed-img" src="${item.imgSrc}" alt="">
//           <div class="feed-text">
//             <p class="feed-date">${item.date}</p>
//             <h2 class="feed-title">${item.title}</h2>
//             <p class="feed-description">${item.publication}</p>
//           </div>
//         </div>
//       </a>
//     `;
//   }).join('');

//   feedContainer.innerHTML = feedHTML;
// } // END renderLatestPress

// Render latest 3 Statements
// async function renderLatestStatements() {
//   const feedData = await response(statements);

//   const feedContainer = document.getElementById('latest-statements');
//   if (!feedContainer) return;
//   feedContainer.innerHTML = '';

//   const sortedFeed = feedData.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);

//   const feedHTML = sortedFeed.map(item => {
//     const topicLinks = item.topics.map(topic => `<a href="#" class="feed-topic">${topic}</a>`).join(' ');

//     return `
//       <a href="#">
//         <div class="latest-feed-preview">
//           <img class="feed-img" src="${item.imgSrc}" alt="">
//           <div class="feed-text">
//             <p class="feed-date">${item.date}</p>
//             <h2 class="feed-title">${item.title}</h2>
//             <p class="feed-description">${item.description}</p>
//             <div class="feed-topics">${topicLinks}</div>
//           </div>
//         </div>
//       </a>
//     `;
//   }).join('');

//   feedContainer.innerHTML = feedHTML;
// } // END renderLatestStatements

// renderStatements();
// renderPress();
// renderInitiatives();
// renderLatestStatements();
// renderLatestPress();
// renderSummaryInitiatives();

// $(document).ready(function() {
//   $(".counter").each(function() {
//     var $this = $(this),
//       target = +$this.data("target"),
//       count = 0,
//       speed = 200; // bigger = slower

//     var increment = target / speed;

//     function updateCount() {
//       count += increment;
//       if (count < target) {
//         $this.text(Math.ceil(count));
//         requestAnimationFrame(updateCount);
//       } else {
//         $this.text(target);
//       }
//     }

//     updateCount();
//   });
// });

$("#menu-button").on("click", function () {
  $("#mobile-menu").toggle("display: block");
});

/* External link exit notice — in-page lightbox modal.
   Unlike window.confirm()/window.open(), an HTML overlay cannot be
   suppressed by popup blockers, so the notice always appears. */
document.addEventListener("DOMContentLoaded", function () {
  // Build the modal once and keep it in the DOM (hidden)
  const overlay = document.createElement("div");
  overlay.id = "exit-notice-overlay";
  overlay.setAttribute("hidden", "");

  const dialog = document.createElement("div");
  dialog.id = "exit-notice-dialog";
  dialog.setAttribute("role", "dialog");
  dialog.setAttribute("aria-modal", "true");
  dialog.setAttribute("aria-labelledby", "exit-notice-title");
  dialog.setAttribute("aria-describedby", "exit-notice-message");

  const title = document.createElement("h2");
  title.id = "exit-notice-title";
  title.textContent = "You are leaving our site";

  const message = document.createElement("p");
  message.id = "exit-notice-message";
  message.textContent = "You are now leaving genzforchangeinitiative.org.";

  const buttons = document.createElement("div");
  buttons.className = "exit-notice-buttons";

  // "Continue" is a real anchor — browsers treat a user's direct click on
  // an <a target="_blank"> as a trusted gesture, so popup blockers allow it.
  const continueLink = document.createElement("a");
  continueLink.id = "exit-notice-continue";
  continueLink.target = "_blank";
  continueLink.rel = "noopener noreferrer";
  continueLink.textContent = "Continue";

  const cancelButton = document.createElement("button");
  cancelButton.id = "exit-notice-cancel";
  cancelButton.type = "button";
  cancelButton.textContent = "Cancel";

  buttons.append(cancelButton, continueLink);
  dialog.append(title, message, buttons);
  overlay.appendChild(dialog);
  document.body.appendChild(overlay);

  let lastFocused = null;

  function openModal(url) {
    continueLink.href = url;
    lastFocused = document.activeElement;
    overlay.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
    cancelButton.focus();
  }

  function closeModal() {
    overlay.setAttribute("hidden", "");
    continueLink.removeAttribute("href");
    document.body.style.overflow = "";
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  }

  cancelButton.addEventListener("click", closeModal);

  // Continue: let the anchor's native navigation happen first, then
  // close the modal on the next tick so removing href can't cancel it
  continueLink.addEventListener("click", function () {
    setTimeout(closeModal, 0);
  });

  // Dismiss when clicking the dimmed backdrop (but not the dialog itself)
  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) closeModal();
  });

  // Dismiss with Escape; trap Tab focus inside the dialog while open
  document.addEventListener("keydown", function (event) {
    if (overlay.hasAttribute("hidden")) return;

    if (event.key === "Escape") {
      closeModal();
      return;
    }

    if (event.key === "Tab") {
      // Only Cancel and Continue are focusable inside the dialog
      const focusables = [cancelButton, continueLink];
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      // If focus somehow left the dialog, pull it back in
      if (!dialog.contains(document.activeElement)) {
        event.preventDefault();
        first.focus();
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  // Intercept clicks on any external link, including links added to the
  // page later by scripts (event delegation on the document).
  document.addEventListener("click", function (event) {
    const link = event.target.closest("a");
    if (!link || !link.href) return;
    if (overlay.contains(link)) return; // ignore the modal's own Continue link
    if (link.hostname && link.hostname !== window.location.hostname) {
      event.preventDefault();
      openModal(link.href);
    }
  });
});
