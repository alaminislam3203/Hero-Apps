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

    //  Success Alert
    Swal.fire({
      icon: 'success',
      title: 'Installed Successfully!',
      text: `${title} has been added to your Installation
       list.`,
      background: '#00E5FF',
      color: '#fff',
      confirmButtonColor: '#00ff87',
      confirmButtonText: 'Awesome!',
      customClass: {
        popup: 'rounded-xl shadow-lg',
        title: 'font-semibold text-lg',
        confirmButton:
          'font-semibold bg-white text-[#00D390] px-4 py-2 rounded-lg hover:bg-gray-100',
      },
    });
  }
};

export { addToStoredDB, getStoredApps };
