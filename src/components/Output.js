const Output = ({markdown}) => {
	return (
		<div id="output-container">
		<div className="sku-contain out-raised">
			<div id="toolbar">
				<h2>Preview</h2>
			</div>
			<div id="preview" dangerouslySetInnerHTML={markdown}></div>
		</div>
		</div>
	)
}

export default Output