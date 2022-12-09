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
>                 lat: 35.3861417,
>                 lng: 139.4707274,
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
>         model.setAttribute('gltf-model', 'img/Enoshima2.gltf');
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
