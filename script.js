> window.onload = () => {
>      let places = staticLoadPlaces();
>      renderPlaces(places);
> };
> 
> function staticLoadPlaces() {
>     return [
>         {
>             name: 'demo',
>             location: {
>                 lat: 35.3838139,
>                 lng: 139.4711693,
>             }
>         },
>     ];
> }
> 
> function renderPlaces(places) {
>     let scene = document.querySelector('a-scene');
> 
>     places.forEach((place) => {
>         let latitude = place.location.lat;
>         let longitude = place.location.lng;
> 
>         let model = document.createElement('a-entity');
>model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
>         model.setAttribute('gltf-model', 'img/demo.gltf');
>         model.setAttribute('rotation', '0 0 0');
>         model.setAttribute('animation-mixer', '');
>         model.setAttribute('scale', '0.5 0.5 0.5');
> 
>         model.addEventListener('loaded', () => {
>             window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
>         });
> 
>         scene.appendChild(model);
>     });
> }
