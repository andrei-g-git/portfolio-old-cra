export const scrollHome = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
};

export const scrollToHeight = (height: number, isSmooth: boolean) => {
    if(height >= 0){
        window.scrollTo({
            top: height,
            left: 0,
            behavior: isSmooth? "smooth" : "auto"
        });
    }
};