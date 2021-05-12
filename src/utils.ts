export function getSrcSetForContentfulUrl(url: string) {
    const urlObj = new URL(url);
    let w = urlObj.searchParams.get("w");
    if(w) {
        urlObj.searchParams.set("w", Math.ceil(Number(w) / 2).toString());
        return `${urlObj.toString()} 1x, ${url} 2x`;
    }
    return undefined;
}