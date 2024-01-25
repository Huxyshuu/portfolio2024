export const scrollTo = (destID) => {
    const destination = document.getElementById(destID);

    destination.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
}