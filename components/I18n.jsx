export default  function I18n({id, fallback}) {
    return fallback || `*${id}*`
}
