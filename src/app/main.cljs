(ns app.main
  (:require [reagent.core :as r]))

(defn component [] 
    [:div
        [:p "I am component"]])

(defn render [component] 
    (r/render [component] 
        (.-body js/document)))

(defn reload! []
  (println "Code updated."))

(defn main! []
  (render (component)))