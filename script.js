/* =============================
       THEME HANDLING
    ============================== */
    function handleThemeChange() {
      const body = document.body;
      if (body.classList.contains("darkMode")) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
    }

    // Observe body class changes
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Run once on page load
    document.addEventListener("DOMContentLoaded", handleThemeChange);

    /* =============================
       FORM FUNCTIONS
    ============================== */
    function toggleFields() {
      const purpose = document.getElementById("purpose").value;
      const companyGroup = document.getElementById("companyGroup");
      if (purpose === "Business") {
        companyGroup.classList.remove("hidden");
      } else {
        companyGroup.classList.add("hidden");
      }
    }

    function generateLetter() {
      const date = new Date();
      const formattedDate = date.toLocaleDateString('en-GB', {
        day: 'numeric', month: 'long', year: 'numeric'
      });

      const purpose = document.getElementById("purpose").value;
      const domainName = document.getElementById("domainName").value || "[domain.com.np]";
      const companyName = document.getElementById("companyName").value || "[Your Company Name]";
      const primaryNS = document.getElementById("primaryNS").value;
      const secondaryNS = document.getElementById("secondaryNS").value;
      const userName = document.getElementById("userName").value || "Kushal Shah";
      const userAddress = document.getElementById("userAddress").value || "[Your Full Address]";

      document.getElementById('userNameDisplay').textContent = userName;
      document.getElementById('userAddressDisplay').textContent = userAddress;
      document.getElementById('currentDateDisplay').textContent = formattedDate;
      document.getElementById('signatureName').textContent = userName;

      const subjectDisplay = document.getElementById('subjectDisplay');
      if (purpose === "Personal") {
        subjectDisplay.textContent = `Subject: Request for Personal Domain Registration - ${domainName}`;
      } else {
        subjectDisplay.textContent = `Subject: Business Domain Registration Request - ${domainName}`;
      }

      const letterBody = document.getElementById('letterBody');
      if (purpose === "Personal") {
        letterBody.innerHTML = `
          <p>Dear Sir/Madam,</p>
          <p>I am writing to formally request the registration of the domain name <strong>${domainName}</strong> for personal use. 
          This domain is intended to represent my personal online presence and digital identity.</p>
          <p>I have provided all necessary personal details below and will be submitting the required documentation.</p>
          <p>The technical specifications for this domain registration are as follows:</p>
          <div class="tech-details">
              <p><strong>Domain Name:</strong> ${domainName}</p>
              <p><strong>Primary Name Server:</strong> ${primaryNS}</p>
              <p><strong>Secondary Name Server:</strong> ${secondaryNS}</p>
          </div>
          <p>Thank you for considering my application. I look forward to your positive response.</p>
          <p class="letter-signature">
            Sincerely,<br>
            <span id="signatureName">${userName}</span>
          </p>
        `;
      } else {
        letterBody.innerHTML = `
          <p>Dear Sir/Madam,</p>
          <p>On behalf of <strong>${companyName}</strong>, I am writing to request the registration of the domain name <strong>${domainName}</strong>. 
          This domain is essential for establishing our company's online presence and digital operations.</p>
          <p>We have enclosed all required documentation to support this application. 
          We believe this domain will significantly contribute to our business growth and customer engagement in the digital marketplace.</p>
          <p>The technical specifications for this domain registration are as follows:</p>
          <div class="tech-details">
              <p><strong>Domain Name:</strong> ${domainName}</p>
              <p><strong>Primary Name Server:</strong> ${primaryNS}</p>
              <p><strong>Secondary Name Server:</strong> ${secondaryNS}</p>
          </div>
          <p>We would be grateful for your prompt attention to this matter.</p>
          <p class="letter-signature">
            Sincerely,<br>
            <span id="signatureName">${userName}</span>
          </p>
        `;
      }
    }

    async function downloadImage() {
      const domainName = document.getElementById("domainName").value;
      if (!domainName) {
        alert("Please enter a domain name before downloading");
        return;
      }

      const loadingOverlay = document.getElementById("loadingOverlay");
      loadingOverlay.classList.add("active");

      try {
        await new Promise(resolve => setTimeout(resolve, 100));
        const letterPreview = document.getElementById("letterPreview");

        const originalStyles = {
          width: letterPreview.style.width,
          maxWidth: letterPreview.style.maxWidth,
          height: letterPreview.style.height,
          position: letterPreview.style.position,
          left: letterPreview.style.left,
          top: letterPreview.style.top,
          zIndex: letterPreview.style.zIndex
        };

        letterPreview.style.width = '800px';
        letterPreview.style.maxWidth = '800px';
        letterPreview.style.height = 'auto';
        letterPreview.style.minHeight = '1000px';
        letterPreview.style.position = 'absolute';
        letterPreview.style.left = '-9999px';
        letterPreview.style.top = '0';
        letterPreview.style.zIndex = '-1';

        await new Promise(resolve => setTimeout(resolve, 200));

        const canvas = await html2canvas(letterPreview, {
          width: 800,
          height: 1000,
          scale: 2,
          backgroundColor: "#ffffff",
          useCORS: true,
          logging: false
        });

        Object.keys(originalStyles).forEach(key => {
          letterPreview.style[key] = originalStyles[key];
        });

        const imgURL = canvas.toDataURL("image/jpeg", 0.95);

        const link = document.createElement("a");
        link.href = imgURL;
        link.download = `${domainName.replace('.com.np', '')}_Cover_Letter.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

      } catch (error) {
        console.error("Error generating cover letter:", error);
        alert("Error generating document. Please try again.");
      } finally {
        const loadingOverlay = document.getElementById("loadingOverlay");
        loadingOverlay.classList.remove("active");
      }
    }

    /* =============================
       INIT
    ============================== */
    document.addEventListener("DOMContentLoaded", () => {
      toggleFields();
      generateLetter();
    });
