export const fetchAllPokemon = () => (
  $.ajax({
    method: 'get',
    url: '/api/pokemon'
    //data:
  })
);

export const fetchPokemon = (id) => (
  $.ajax({
    method: 'get',
    url: `/api/pokemon/${id}`
  })
);
