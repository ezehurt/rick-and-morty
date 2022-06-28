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


const getConcatChar = () => {
    let isFirstConcat = true;
    return () => {
        if (isFirstConcat) {
            isFirstConcat = false;
            return "?";
        }
        return "&";
    };
};

export const generateSearchString = (
    {
        context,
        term
    },
) => {
    let url = `${context}/q`;
    const concatChar = getConcatChar();
    if (term) {
        url += `${concatChar()}q=${encodeURIComponent(term)}`;
    }
    return url;
};