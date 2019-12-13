import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Man {
	name: string;

    constructor(name: string) {
        this.name = name;
    }

    log() {
        console.log("Man:", this.name);
    }
}

const slavik = new Man("Slavik");
slavik.log();

const vitalyk = new Man("Vitold");
vitalyk.log();

const vital = new Man("Vitoldios");
vital.log();

const people = [slavik, vitalyk, vital];


ReactDOM.render(
	(
		<div>
			Hello world 4
			<ul>
				{people.map(man =>
					<li key={man.name}>{man.name}</li>
				)}
			</ul>
		</div>
	),
	document.getElementById("root")
);
