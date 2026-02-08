#!/usr/bin/env node

function greet(name = "world") {
  return `Hello, ${name}! 🤖 lodestar-bot is operational.`;
}

console.log(greet());
console.log(greet("Harbour Pilot"));
