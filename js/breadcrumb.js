function createBreadcrumb() {
  const page = document.body.dataset.page || "";
  const hash = window.location.hash.replace("#", "");

  const map = {
    home: {
      title: "Home",
      crumbs: ["Home"],

      sections: {
        home: {
          title: "Home",
          crumbs: ["JPKR", "Home"],
        },

        pamidighantams: {
          title: "Pamidighantams",
          crumbs: ["Home", "Pamidighantams"],
        },

        childhood: {
          title: "Childhood",
          crumbs: ["Home", "Childhood"],
        },

        schooling: {
          title: "Schooling",
          crumbs: ["Home", "Schooling"],
        },

        college: {
          title: "College",
          crumbs: ["Home", "College"],
        },

        lawschool: {
          title: "Law School",
          crumbs: ["Home", "Law School"],
        },
      },
    },

    family: {
      title: "Family",
      crumbs: ["Home", "Family"],

      sections: {
        marriage: {
          title: "Marriage",
          crumbs: ["Home", "Family", "Marriage"],
        },
      },
    },

    lawer: {
      title: "As A Lawer",
      crumbs: ["Home", "As A Lawer"],

      sections: {
        advisory: {
          title: "Advisory Roles",
          crumbs: ["Home", "As A Lawer", "Advisory Roles"],
        },
      },
    },

    judicial: {
      title: "Judicial Career",
      crumbs: ["Home", "Judicial Career"],

      sections: {
        service: {
          title: "Service Tenure & Key Positions",
          crumbs: ["Home", "Judicial Career", "Service Tenure & Key Positions"],
        },

        reform: {
          title: "Reform Work, Committees & Commissions",
          crumbs: [
            "Home",
            "Judicial Career",
            "Reform Work, Committees & Commissions",
          ],
        },

        judiciallegacy: {
          title: "Judicial Legacy & Public Impact",
          crumbs: [
            "Home",
            "Judicial Career",
            "Judicial Legacy & Public Impact",
          ],
        },
      },
    },

    postretirement: {
      title: "Post Retirement",
      crumbs: ["Home", "Post Retirement"],

      sections: {
        consultations: {
          title: "Advisory Roles & Consultations",
          crumbs: ["Home", "Post Retirement", "Advisory Roles & Consultations"],
        },

        lectures: {
          title: "Lectures, Talks & Knowledge Sharing",
          crumbs: [
            "Home",
            "Post Retirement",
            "Lectures, Talks & Knowledge Sharing",
          ],
        },
      },
    },

    instutions: {
      title: "Instutions",
      crumbs: ["Home", "Instutions"],

      sections: {
        ambastram: {
          title: "Ambastram",
          crumbs: ["Home", "Instutions", "Ambastram"],
        },

        avt: {
          title: "AVT",
          crumbs: ["Home", "Instutions", "AVT"],
        },

        vedabhavan: {
          title: "Vedabhavan",
          crumbs: ["Home", "Instutions", "Vedabhavan"],
        },
      },
    },

    spiritual: {
      title: "Spiritual",
      crumbs: ["Home", "Spiritual"],

      sections: {
        association: {
          title: "Association with Spiritual Movements Institutions",
          crumbs: [
            "Home",
            "Spiritual",
            "Association with Spiritual Movements Institutions",
          ],
        },

        gurus: {
          title: "My Gurus",
          crumbs: ["Home", "Spiritual", "My Gurus"],
        },

        talks: {
          title: "Talks, Discourses & Spiritual Writings",
          crumbs: [
            "Home",
            "Spiritual",
            "Talks, Discourses & Spiritual Writings",
          ],
        },

        guidance: {
          title: "Guidance & Facilitation for Seekers",
          crumbs: ["Home", "Spiritual", "Guidance & Facilitation for Seekers"],
        },

        integration: {
          title: "Integration of Spirituality in Social Upliftment",
          crumbs: [
            "Home",
            "Spiritual",
            "VedabIntegration of Spirituality in Social Upliftmenthavan",
          ],
        },
      },
    },

    gallery: {
      title: "Gallery",
      crumbs: ["Home", "Gallery"],

      sections: {
        photographs: {
          title: "Photographs",
          crumbs: ["Home", "Gallery", "Photographs"],
        },

        videos: {
          title: "Videos",
          crumbs: ["Home", "Gallery", "Videos"],
        },

        media: {
          title: "Media",
          crumbs: ["Home", "Gallery", "Media"],
        },
      },
    },

    articles: {
      title: "Articles",
      crumbs: ["Home", "Articles"],

      sections: {
        english: {
          title: "English",
          crumbs: ["Home", "Articles", "English Articles"],
        },

        telugu: {
          title: "Telugu",
          crumbs: ["Home", "Articles", "Telugu Articles"],
        },

        books: {
          title: "Books",
          crumbs: ["Home", "Articles", "Books"],
        },
      },
    },

    contact: {
      title: " Contact Info",
      crumbs: ["Home", " Contact Info"],

      sections: {
        professional: {
          title: "Professional Contact Info",
          crumbs: ["Home", "Contact Info", "Professional Contact Info"],
        },

        trusts: {
          title: "Trusts Institutions Representation",
          crumbs: [
            "Home",
            "Contact Info",
            "Trusts Institutions Representation",
          ],
        },

        forum: {
          title: "Social & Literary Forum Links",
          crumbs: ["Home", "Contact Info", "Social & Literary Forum Links"],
        },
      },
    },
  };

  let data = map[page];

  if (!data) return;

  if (data.sections && hash && data.sections[hash]) {
    data = data.sections[hash];
  }

  const title = document.getElementById("page-title");
  const breadcrumb = document.getElementById("breadcrumb");

  if (!title || !breadcrumb) return;

  title.textContent = data.title;

  breadcrumb.innerHTML = "";

  const links = {
    JPKR: "index.html",
    Home: "intro.html",
    Pamidighantams: "intro.html#pamidighantams",
    Childhood: "intro.html#childhood",
    Schooling: "intro.html#schooling",
    College: "intro.html#college",
    "Law School": "intro.html#lawschool",

    Family: "family.html",
    Marriage: "family.html#marriage",

    "As A Lawer": "lawer.html",
    "Advisory Roles": "lawer.html#advisory",

    "Judicial Career": "judicial.html",
    "Service Tenure & Key Positions": "judicial.html#service",
    "Reform Work, Committees & Commissions": "judicial.html#reform",
    "Judicial Legacy & Public Impact": "judicial.html#judiciallegacy",

    "Post Retirement": "postretirement.html",
    "Advisory Roles & Consultations": "postretirement.html#consultations",
    "Lectures, Talks & Knowledge Sharing": "postretirement.html#lectures",

    Instutions: "instutions.html",
    Ambastram: "instutions.html#ambastram",
    AVT: "instutions.html#avt",
    Vedabhavan: "instutions.html#vedabhavan",

    Spiritual: "/spiritual.html",
    "Association with Spiritual Movements Institutions":
      "/spiritual.html#association",
    "My Gurus": "/spiritual.html#gurus",
    "Talks, Discourses & Spiritual Writings": "/spiritual.html#talks",
    "Guidance & Facilitation for Seekers": "/spiritual.html#guidance",
    "Integration of Spirituality in Social Upliftment":
      "/spiritual.html#integration",

    Gallery: "/gallery.html",
    Photographs: "/gallery.html#photographs",
    Videos: "/gallery.html#videos",
    Media: "/gallery.html#media",

    Articles: "/articles.html",
    English: "/articles.html#english",
    Telugu: "/articles.html#telugu",
    Books: "/articles.html#books",

    "Contact Info": "/contact.html",
    "Professional Contact Info": "/contact.html#professional",
    "Trusts Institutions Representation": "/contact.html#trusts",
    "Social & Literary Forum Links": "/contact.html#forum",
  };

  data.crumbs.forEach((crumb, index) => {
    const li = document.createElement("li");
    li.className = "breadcrumb-item";

    if (index === data.crumbs.length - 1) {
      li.classList.add("active");
      li.textContent = crumb;
    } else {
      const a = document.createElement("a");
      a.href = links[crumb] || "#";
      a.textContent = crumb;
      li.appendChild(a);
    }

    breadcrumb.appendChild(li);
  });
}
