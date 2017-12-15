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
   })
);

export const fetchLocalWorkspaces = (location, radius) => (
  fetch(`https://coffeewifi.herokuapp.com/businesses?longitude=${location[0]}&latitude=${location[1]}&radius=${radius}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
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
   })
);

export const fetchBusinessReviews = (business) => (
  fetch(`https://coffeewifi.herokuapp.com/business/${business._id}/reviews`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
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
