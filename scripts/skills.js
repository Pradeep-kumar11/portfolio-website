const skillsData = [
  {
    name: "AWS",
    icon: "fab fa-aws",
    points: [
      "Amazon Web Services is a secure cloud platform for computing, storage, and networking.",
      "Used for hosting, deployment, and scaling cloud applications.",
      "Enables businesses to reduce infrastructure costs and increase reliability.",
      "Used in production for EC2 (compute), S3 (storage), IAM (access control), RDS (databases).",
      "Scalable and pay-as-you-go – ideal for startups to enterprises."
    ]
  },
  {
    name: "Jenkins",
    icon: "fas fa-cogs",
    points: [
      "Jenkins is an automation server for continuous integration/continuous delivery.",
      "Used to automate testing and deployment processes.",
      "Accelerates software delivery pipelines in DevOps workflows.",
      "Configured to build and deploy code automatically after every commit.",
      "Supports 1800+ plugins to integrate with almost every DevOps tool."
    ]
  },
  {
    name: "Docker",
    icon: "fab fa-docker",
    points: [
      "Docker is a platform for developing, shipping, and running applications in containers.",
      "Used to package applications with all dependencies into isolated environments.",
      "Improves portability and eliminates 'it works on my machine' issues.",
      "Used to run microservices-based applications in production environments.",
      "Lightweight and fast, Docker enhances development to deployment cycles."
    ]
  },
  {
    name: "Terraform",
    icon: "fas fa-code-branch",
    points: [
      "Terraform is an open-source Infrastructure as Code tool by HashiCorp.",
      "Used to provision, manage, and version cloud infrastructure safely and efficiently.",
      "Enables reproducibility and consistency in infrastructure setup.",
      "Used in cloud-native DevOps pipelines to deploy AWS resources automatically.",
      "Declarative syntax allows automation of complex infrastructure tasks."
    ]
  },
  {
    name: "Ansible",
    icon: "fas fa-server",
    points: [
      "Ansible is an open-source tool for configuration management and application deployment.",
      "Used to automate repetitive system administration tasks.",
      "Improves speed, scalability, and consistency in deployments.",
      "Used to configure servers, deploy code, and orchestrate complex workflows.",
      "Agentless – requires only SSH, making it simple and secure to operate."
    ]
  },
  {
    name: "Git & GitHub",
    icon: "fab fa-github",
    points: [
      "Git is a distributed version control system; GitHub is a code hosting platform.",
      "Used to track changes, collaborate, and manage code repositories.",
      "Ensures code integrity, collaboration, and rollback in case of errors.",
      "Used to manage source code for projects, trigger CI/CD, and review pull requests.",
      "Widely adopted across industries for all types of software projects."
    ]
  },
  {
    name: "Prometheus & Grafana",
    icon: "fas fa-chart-line",
    points: [
      "Prometheus is a monitoring system; Grafana is a visualization tool.",
      "Used to track metrics, log data, and create real-time dashboards.",
      "Helps organizations detect and resolve issues quickly.",
      "Used to monitor system health, container metrics, and alert failures.",
      "Crucial for production-grade observability and uptime monitoring."
    ]
  },
  {
    name: "Maven",
    icon: "fas fa-cube",
    points: [
      "Maven is a build automation and dependency management tool for Java projects.",
      "Used to compile, test, and package applications.",
      "Automates software build processes to ensure consistency.",
      "Used in Jenkins pipelines to build Spring Boot apps.",
      "Defines project structure via `pom.xml`, simplifying builds and dependencies."
    ]
  },
  {
    name: "SQL",
    icon: "fas fa-database",
    points: [
      "Structured Query Language (SQL) is used to interact with relational databases.",
      "Used to query, insert, update, and manage structured data.",
      "Essential for business data processing and analysis.",
      "Used to manage data in RDS (Relational Database Service) in AWS.",
      "Foundation for any application involving persistent data storage."
    ]
  },
  {
    name: "HTML",
    icon: "fab fa-html5",
    points: [
      "HTML (Hypertext Markup Language) is the standard markup for creating web pages.",
      "Used to structure and present content on the internet.",
      "Forms the foundation of every frontend application.",
      "Used to build static websites, forms, and web-based user interfaces.",
      "Combines with CSS and JavaScript to create dynamic web experiences."
    ]
  },
  {
    name: "Linux",
    icon: "fas fa-terminal",
    points: [
      "Linux is an open-source operating system used in most servers and cloud systems.",
      "Used for server-side operations, scripting, and development environments.",
      "Powers cloud platforms and enterprise applications.",
      "Used by DevOps teams for provisioning, monitoring, and deployment tasks.",
      "Highly secure, customizable, and preferred for production systems."
    ]
  },
  {
    name: "Python",
    icon: "fab fa-python",
    points: [
      "Python is a high-level, interpreted programming language with a focus on readability.",
      "Used for scripting, automation, and backend services.",
      "Extensively adopted in data science, machine learning, and DevOps tooling.",
      "Used to write scripts for infrastructure automation and monitoring tasks.",
      "Supports multiple libraries for cloud, APIs, and orchestration workflows."
    ]
  },
  {
    name: "Kubernetes",
    icon: "fas fa-project-diagram",
    points: [
      "Kubernetes is a container orchestration platform for automating deployments and scaling.",
      "Used to manage containerized applications at scale.",
      "Provides fault tolerance, self-healing, and service discovery.",
      "Used in microservices deployments where uptime and scaling matter.",
      "De facto standard in modern DevOps infrastructure."
    ]
  }
];

// Render skills to HTML
const container = document.querySelector('.skills-grid');
const floatingTooltip = document.getElementById('floating-tooltip');

skillsData.forEach(skill => {
  const card = document.createElement('div');
  card.className = 'skill-card';
  card.innerHTML = `
    <i class="${skill.icon}"></i>
    <h4>${skill.name}</h4>
  `;

  // Show tooltip on hover
  card.addEventListener('mouseenter', (e) => {
    const tooltipContent = `
      <ul>
        ${skill.points.map(point => `<li>${point}</li>`).join('')}
      </ul>
    `;
    floatingTooltip.innerHTML = tooltipContent;
    floatingTooltip.style.display = 'block';
    
    const rect = card.getBoundingClientRect();
    floatingTooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;
    floatingTooltip.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
    floatingTooltip.style.transform = 'translateX(-50%)';
  });

  card.addEventListener('mouseleave', () => {
    floatingTooltip.style.display = 'none';
  });

  container.appendChild(card);
});
