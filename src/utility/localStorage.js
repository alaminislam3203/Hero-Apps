import Swal from 'sweetalert2';

const getStoredApps = () => {
  const storedAppSTR = localStorage.getItem('favoriteList');
  if (storedAppSTR) {
    try {
      return JSON.parse(storedAppSTR);
    } catch (error) {
      console.error('Error parsing stored data:', error);
      return [];
    }
  }
  return [];
};

const addToStoredDB = (id, title) => {
  const storedAppData = getStoredApps();
  const numericId = parseInt(id);

  if (storedAppData.includes(numericId)) {
    // ⚠️ Already Installed Alert
    Swal.fire({
      icon: 'warning',
      title: 'Already Installed!',
      text: `"${title}" is already installed on your device.`,
      background: '#fff3cd',
      color: '#664d03',
      confirmButtonColor: '#f0ad4e',
      confirmButtonText: 'Got it!',
      customClass: {
        popup: 'rounded-xl shadow-lg border border-[#ffeeba]',
        title: 'font-semibold text-lg',
        confirmButton: 'font-semibold',
      },
    });
  } else {
    storedAppData.push(numericId);
    localStorage.setItem('favoriteList', JSON.stringify(storedAppData));

    // ✅ Professional Gradient SweetAlert
    Swal.fire({
      icon: 'success',
      title: ' Installed Successfully!',
      html: `<p style="font-size: 16px; font-weight: 500; color: #f0f0f0;">
           <b>${title}</b> has been added to your installation list.
         </p>`,
      background: 'linear-gradient(135deg, #632EE3, #9F62F2)',
      color: '#fff',
      confirmButtonText: 'Continue',
      confirmButtonColor: '#00D390',
      buttonsStyling: false,
      customClass: {
        popup: 'rounded-2xl shadow-2xl p-6',
        title: 'font-bold text-2xl mb-2',
        htmlContainer: 'text-gray-100',
        confirmButton:
          'font-semibold bg-[#00D390] text-white px-6 py-2 rounded-lg hover:bg-[#00b87b] transition-all duration-300',
      },
      showClass: {
        popup: `
      animate__animated
      animate__fadeInDown
      animate__faster
    `,
      },
      hideClass: {
        popup: `
      animate__animated
      animate__fadeOutUp
      animate__faster
    `,
      },
    });
  }
};

export { addToStoredDB, getStoredApps };
