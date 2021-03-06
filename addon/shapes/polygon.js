import BaseShape from './base';

export default BaseShape.extend({
  createInstance() {
    return new google.maps.Polygon();
  },

  defaultOptions() {
    return {
      fillColor: 'red',
      fillOpacity: 0.5,
      strokeColor: 'red',
      strokeWeight: 2,
      strokeOpacity: 0.6
    };
  },

  normalizeOptions(options) {
    return {
      paths: options.paths,
      clickable: options.clickable,
      draggable: options.draggable,
      editable: options.editable,
      fillColor: options.fillColor,
      fillOpacity: options.fillOpacity,
      strokeColor: options.strokeColor,
      strokeOpacity: options.strokeOpacity,
      strokePosition: options.strokePosition,
      strokeWeight: options.strokeWeight,
      visible: options.visible,
      zIndex: options.zIndex
    };
  }
});
