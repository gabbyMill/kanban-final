export default function getCategory(e) {
  const section = e.target.closest('section')
  // find out what category we're in:
  return section.id.split('-section')[0]
}
