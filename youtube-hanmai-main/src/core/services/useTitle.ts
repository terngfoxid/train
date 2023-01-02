export const useTitle = (title?: string) => {
  console.log('useTitle')
  document.querySelector('title').innerHTML = title
    ? `${title} · Han at karen champ`
    : 'Han at karen champ'
}
