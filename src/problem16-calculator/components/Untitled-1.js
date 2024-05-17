<div className="flex flex-col items-center justify-center w-[80%] mx-auto p-4 bg-gray-200 rounded-lg h-100">
      <Display result={expression || result} />
      <div className="grid w-full grid-cols-4 gap-4 mt-4 mb-4">
        <Button onClick={() => handleNumberClick("1")} value="1" />
        <Button onClick={() => handleNumberClick("2")} value="2" />
        <Button onClick={() => handleNumberClick("3")} value="3" />
        <Button onClick={() => handleOperatorClick("+")} value="+" />
      </div>
      <div className="grid w-full grid-cols-4 gap-4 mt-4">
        <Button onClick={() => handleNumberClick("4")} value="4" />
        <Button onClick={() => handleNumberClick("5")} value="5" />
        <Button onClick={() => handleNumberClick("6")} value="6" />
        <Button onClick={() => handleOperatorClick("-")} value="-" />
      </div>
      <div className="grid w-full grid-cols-4 gap-4 mt-4">
        <Button onClick={() => handleNumberClick("7")} value="7" />
        <Button onClick={() => handleNumberClick("8")} value="8" />
        <Button onClick={() => handleNumberClick("9")} value="9" />
        <Button onClick={() => handleOperatorClick("*")} value="*" />
      </div>
      <div className="grid w-full grid-cols-4 gap-4 mt-4">
        <Button onClick={() => handleNumberClick("0")} value="0" />
        <Button onClick={() => handleOperatorClick(".")} value="." />
        <Button onClick={handleEqualClick} value="=" />
        <Button onClick={() => handleOperatorClick("/")} value="/" />
      </div>
      <div className="grid w-full grid-cols-1 gap-4 mt-4">
        <Button onClick={handleClearClick} value="C" />
      </div>
    </div>