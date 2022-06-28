export const decodeSearchParams = (searchStr) => {
    var urlParams = new URLSearchParams(searchStr);
    let params = {};
    const q = urlParams.get("q");
    const p = urlParams.get("p");

    if (q) {
        params.term = q;
    }
  
    params.page = !p || isNaN(Number(p)) ? 1 : Number(p);
    return params;
};