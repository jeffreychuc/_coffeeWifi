export const saveUserProfile = (currentUserProfile) => (
  fetch('https://coffeewifi.herokuapp.com/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ sub: currentUserProfile.sub })
   });
);

export const filterWorkspaces = (filter) => (
  fetch('https://coffeewifi.herokuapp.com/filter', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ filter })
   });
);

export const fetchLocalWorkspaces = (location, radius) => (
  fetch(`https://coffeewifi.herokuapp.com/businesses?longitude=${location[0]}&latitude=${location[1]}&radius=${radius}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
   });
);
