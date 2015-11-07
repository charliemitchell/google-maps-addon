import Ember from 'ember';
import Map from '../map';

export default Ember.Component.extend({
  setupMap: Ember.on('init', function() {
    this.map = new Map();
    this.map.set('owner', this);
  }),

  setupMapElement: Ember.on('willInsertElement', function() {
    this.map.initializeOptions();

    // Checking for the availability of Google Maps JavaScript SDK, the hero
    if (window.google) {
      this.set('mapElement', this.map.createMapElement());

      this.updateMapOptions();
      this.updateShapes();
    } else {
      console.error('Please include the Google Maps JavaScript SDK.');
    }
  }),

  updateMapOptionsObserver: Ember.observer('mapOptions', function() {
    this.updateMapOptions();
  }),

  updateShapesObserver: Ember.observer('markers', 'circles', 'rectangles', 'polygons', function() {
    Ember.run.once(this, "updateShapes");
  }),

  updateMapOptions() {
    if (this.get('mapElement')) {
      this.map.initializeMouseEventCallbacks();
      this.map.initializeInfowindow();
    }
  },

  updateShapes() {
    if (this.get('mapElement')) {
      this.map.drawAllShapes();
    }
  }
});
