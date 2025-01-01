export function scrollTo(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    const offset = 64; // height of navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}