// export const getImageUrl=(path)=>{
//     return new URL(`./assets${path}`, import.meta.url).href;
// };

export const getImageUrl = (path) => {
    const baseUrl = new URL(import.meta.url);
    baseUrl.pathname = `../assets${path}`;
    return baseUrl.href;
  };
  
  
  