import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const TOKEN_EXPIRY_TIME = 3600 * 1000;

 const validateToken = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    user.getIdTokenResult().then((idTokenResult) => {
      const currentTime = Date.now();
      const expiryTime = idTokenResult.expirationTime ? new Date(idTokenResult.expirationTime).getTime() : 0;
      if (expiryTime - currentTime <= 0) {
        auth.signOut();
        console.log('Session expired, logging out...');
        window.location.href = '/login';
      }
    }).catch((error) => {
      console.error('Error getting token result:', error);
    });
  } else {
    console.log('No user is signed in.');
  }
};

 const useTokenValidation = () => {
  const history = useHistory();

  useEffect(() => {
    const intervalId = setInterval(() => {
      validateToken();
    }, TOKEN_EXPIRY_TIME);

    return () => clearInterval(intervalId);
  }, [history]);

  useEffect(() => {
    const unlisten = history.listen((location, action) => {
      validateToken();
    });

    return () => unlisten();
  }, [history]);
};

export { useTokenValidation, validateToken };