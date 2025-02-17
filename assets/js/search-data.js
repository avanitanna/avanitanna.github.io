// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-teaching-and-mentoring",
          title: "teaching and mentoring",
          description: "I enjoy teaching and mentoring - feel free to contact me if you&#39;d like to have a chat!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching_mentoring/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "These are some selected projects. Contact me if you want to collaborate on interesting projects or learn more about my work!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Reach out to me for more information",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-recipe-finder-agent-using-smolagents",
      
        title: "Recipe Finder Agent using smolagents",
      
      description: "Recipe recommendation",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/hf-recipe-agent/";
        
      },
    },{id: "post-part-1-unlocking-the-power-of-llms-for-the-cashflow-game",
      
        title: "[Part 1] Unlocking the Power of LLMs for the Cashflow Game",
      
      description: "Introduction -- Unlocking the Power of LLMs for the Cashflow Game",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/cashflow-1/";
        
      },
    },{id: "projects-bionic-vision",
          title: 'Bionic Vision',
          description: "Evaluating Subretinal Prosthetic Implant Simulation for Visual Acuity",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bionic_vision/";
            },},{id: "projects-fake-news-detection",
          title: 'Fake News Detection',
          description: "Employing graph based machine learning for fake news detection",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fake_news_detection/";
            },},{id: "projects-conversational-agents-in-virtual-reality",
          title: 'Conversational agents in Virtual Reality',
          description: "Creating interactable agents in Unity",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mixed_reality/";
            },},{id: "projects-scalable-social-network-app",
          title: 'Scalable Social Network App',
          description: "Implementing a scalable web service",
          section: "Projects",handler: () => {
              window.location.href = "/projects/scalable_internet_services/";
            },},{id: "projects-software-fuzz-testing",
          title: 'Software Fuzz Testing',
          description: "Building a custom fuzzer",
          section: "Projects",handler: () => {
              window.location.href = "/projects/software_fuzzing/";
            },},{id: "projects-how-should-i-pronounce-your-name",
          title: 'How should I pronounce your name?',
          description: "Improving the performance of Voice Conversion technologies",
          section: "Projects",handler: () => {
              window.location.href = "/projects/voice_conversion_tech/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%76%61%6E%69%6E%61%30%30%31@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/avanitanna", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/avani-tanna", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=av0sbJYAAAAJ&hl", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
