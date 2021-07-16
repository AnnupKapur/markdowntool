const Input = ({placeholder, clear, resetDemo, update, size, sizeToggle}) => {
	return (
		<div id="input-container">
		<div className="sku-contain in-raised">
			<div id="toolbar">
				<h2>Editor</h2>
				<div id="buttons">
					
					{size.editorMax===true ? <button onClick={clear}>Clear</button> : ''}
					{size.editorMax===true ? <button onClick={resetDemo}>Reset to demo</button> : ''}
					
					<button onClick={sizeToggle}>{size.editorMax===true ? "Hide Editor" : "Show Editor"}</button>

				</div>
			</div>

			{size.editorMax===true ? <textarea id="editor" onChange={update} type="text" value={placeholder.text}></textarea> : ''}
		</div>
		</div>
	)
}

export default Input