// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

window.onload = function () {
  // this calculates volume of a sphere

  const params = new URLSearchParams(document.location.search)

  // input

  const radius = params.get("radius")
  console.log(radius)

  // process
  const volume = (4 / 3) * Math.PI * radius ** 3
  const lengthOfRadius =
    "<ul>\n<li>Radius = " 
    + radius + 
    "</li>\n</ul>"

  // output
  document.getElementById("side").innerHTML = lengthOfRadius
  document.getElementById("volume").innerHTML = "Volume is: " + volume + " mm²"
}
