import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	vscode.workspace.onWillCreateFiles(event => {
		vscode.window.showInformationMessage(`willCreate ${JSON.stringify(event)}`, 'ok');
		event.waitUntil((async function () {
			await sleep(5000);
			vscode.window.showWarningMessage('sleep done', 'ok');
		})());
	});
	vscode.workspace.onDidCreateFiles(event => {
		vscode.window.showInformationMessage(`didCreate ${JSON.stringify(event)}`, 'ok');
	});
	vscode.workspace.onWillRenameFiles(event => {
		vscode.window.showInformationMessage(`willRename ${JSON.stringify(event)}`, 'ok');
	});
	vscode.workspace.onDidRenameFiles(event => {
		vscode.window.showInformationMessage(`didRename ${JSON.stringify(event)}`, 'ok');
	});
	vscode.workspace.onWillDeleteFiles(event => {
		vscode.window.showInformationMessage(`willDelete ${JSON.stringify(event)}`, 'ok');
	});
	vscode.workspace.onDidDeleteFiles(event => {
		vscode.window.showInformationMessage(`didDelete ${JSON.stringify(event)}`, 'ok');
	});
}

export function deactivate() { }

function sleep(time: number) {
	return new Promise(resolve => setTimeout(resolve, time));
}
