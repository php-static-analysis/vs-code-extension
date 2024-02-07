import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let command = vscode.commands.registerCommand('php-static-analysis.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from PHP Static Analysis!');
	});

	context.subscriptions.push(command);
}
