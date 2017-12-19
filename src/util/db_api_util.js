export const saveUserProfile = (currentUserProfile) => (
  fetch('https://coffeewifi.herokuapp.com/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ sub: currentUserProfile.sub })
   })
);

export const filterWorkspaces = (filter) => (
  fetch('https://coffeewifi.herokuapp.com/filter', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ filter })
   }).then( response => {
    if (response.status === 200) {
     return response.json();
    }
    else {
     return [];
    }
  })
);

export const fetchLocalWorkspaces = (location, radius) => (
  fetch(`https://coffeewifi.herokuapp.com/businesses?latitude=${location[0]}&longitude=${location[1]}&radius=${radius}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
   }).then( response => {
    if (response.status === 200) {
     return response.json();
    }
    else {
     return [];
    }
  })
);



export const fetchUserReviews = (user) => (
  fetch(`https://coffeewifi.herokuapp.com/user/${user._id}/reviews`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
   }).then( response => {
    if (response.status === 200) {
      return response.json();
    }
    else {
      return [];
    }
  })
);

export const fetchBusinessReviews = (businessID) => (
  fetch(`https://coffeewifi.herokuapp.com/business/${businessID}/reviews`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
   }).then( response => {
    debugger;
    if (response.status === 200) {
      console.log(response);
      return response.json();
    }
    else {
      console.log('returning nothing?');
      return [];
    }
  })
);


export const postBusinessReview = (business, user, review) => (
  fetch(`https://coffeewifi.herokuapp.com/business/${business._id}/reviews`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
                            user: {
                                    id: user._id,
                                    name: user.name
                                  },
                            review: {
                                      content: review.content,
                                      starts: review.stars
                                    }
                        })
   })
);

export const fetchBusinessStats = (businessID) => (
  fetch(`https://coffeewifi.herokuapp.com/business/${businessID}/stats`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
   }).then( response => {
    if (response.status === 200) {
      return response.json();
    }
    else {
      return [];
    }
  })
);
