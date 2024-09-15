const winners = [
  {
    name: "Mohammed Aslam",
    regNo: "99230041140",
    winningDay: "2nd Sep",
    socialMedia: "Instagram",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1cie1DU06FhQAWSVsHbcW3Y-rCdoVHiiU",
    certificateId: "CBSCAQI01",
  },
  {
    name: "Antonymehan",
    regNo: "9922008190",
    winningDay: "3rd Sep",
    socialMedia: "LinkedIn",
    imageUrl:
      "https://drive.usercontent.google.com/download?id=1r0MyhfFHEFaZj7AuR0G6QdkInnhoiQPC&export=view&authuser=0",
    certificateId: "CBSCAQL02",
  },
  {
    name: "Nettikoppula Gopi Chand",
    regNo: "99220040950",
    winningDay: "3rd Sep",
    socialMedia: "Instagram",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=178v98LHrhjTtR3JxtrsKJZXSQ2F5ou-O",
    certificateId: "CBSCAQI02",
  },
  {
    name: "Omkara Anjaneya Kumar Ratnala",
    regNo: "99220041567",
    winningDay: "4th Sep",
    socialMedia: "LinkedIn",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1HB2fIdegDtTHP_lj578oSD7CJrem24AF",
    certificateId: "CBSCAQL03",
  },
  {
    name: "Vishva B",
    regNo: "9923008146",
    winningDay: "4th Sep",
    socialMedia: "Instagram",
    imageUrl:
      "https://drive.google.com/uc?export=view&id=1QvEYrKaouzz3H4CPWrDRjlh-W9GYQr2O",
    certificateId: "CBSCAQI03",
  },
];

document
  .getElementById("verification-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const certID = document.getElementById("certID").value.trim();
    const winner = winners.find((w) => w.certificateId === certID);

    if (winner) {
      document.getElementById("certificateImage").src = winner.imageUrl;
      document.getElementById("certificateName").textContent = winner.name;
      document.getElementById("certificateRegNo").textContent = winner.regNo;
      document.getElementById("certificateWinningDay").textContent =
        winner.winningDay;
      document.getElementById("certificateSocialMedia").textContent =
        winner.socialMedia;

      document.getElementById("certificatePopup").classList.add("show");
    } else {
      alert("Certificate ID not found!");
    }
  });

document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("certificatePopup").classList.remove("show");
});