document.getElementById('verification-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const certID = document.getElementById('certID').value;

  document.getElementById('loading').style.display = 'block';
  document.getElementById('error').style.display = 'none';
  document.querySelector(".certificate-popup").style.display = "none";

  try {
      const response = await fetch('http://localhost:3000/cerficate/verify-certificate', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ certID })
      });

      document.getElementById('loading').style.display = 'none';

      if (!response.ok) {
          document.getElementById('error').style.display = 'block';
          return;
      }

      const data = await response.json();
      console.log(data)

      document.querySelector(".certificate-popup").style.display = "block";
      document.getElementById('certificateName').innerText = data.name;
      document.getElementById('certificateRegNo').innerText = data.reg_no;
      document.getElementById('certificateWinningDay').innerText = data.winning_date;
      document.getElementById('certificateSocialMedia').innerText = data.winning_place;
      document.getElementById('certificateImage').src = data.img_url;
      document.getElementById('certificateID').innerText = data.CertificateID;

  } catch (error) {
    console.log(error)
      document.getElementById('loading').style.display = 'none';
      document.getElementById('error').innerText = 'Error verifying certificate. Please try again later.';
      document.getElementById('error').style.display = 'block';
      console.error('Error verifying certificate:', error);
  }
});
