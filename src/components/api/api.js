


export const APIsearch =  async (term) => {
  const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${term}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '94da58f54fmshc4507a26d1908c2p1adb42jsnd3d586a61c0a',
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };
/*
  try {
    const response = await fetch(url, options);
    const result =  await response.json();
    //console.log(result.data);
    return result.data.map(i => {
      console.log(i)
    })
  } catch (error) {
    console.error(error);
  }
*/

  try {
    const response = await fetch(url, options);
    const result =  await response.json();
    //console.log(result.data);
    return result.data.map(i => ({
      image: i.album.cover,
      name: i.artist.name,
      album: i.album.title,
      song: i.title_short,
      id: i.id,
      link: i.artist.link,
      preview: i.preview
    }))
  } catch (error) {
    console.error(error);
  }

}






//APIsearch()

/*

const API = {
    search(term){
      const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${term}`;
      const options = {
	      method: 'GET',
	      headers: {
		      'x-rapidapi-key': '94da58f54fmshc4507a26d1908c2p1adb42jsnd3d586a61c0a',
		      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
	      }
      };

      try {
      	const response = fetch(url, options);
      	const result =  response.json();
      	console.log(result);
      } catch (error) {
      	console.error(error);
      }
    }
}
API.search()
export {API}

*/
