

export const GifItem = ( { images } ) => {
  return (
    <div className="card">
        <img src={ images.url } alt={ images.title }></img>
        <p>{ images.title }</p>
    </div>
  )
}
