import { useEffect } from "react";

const useRemoveIonPageInvisible = () => {
  useEffect(() => {
    const ionPages = document.querySelectorAll(".ion-page");
    ionPages.forEach(page => {
      page.classList.remove("ion-page-invisible");
    });
  }, []);
};

export { useRemoveIonPageInvisible };
