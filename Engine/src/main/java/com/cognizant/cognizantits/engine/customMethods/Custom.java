package com.cognizant.cognizantits.engine.customMethods;

import com.cognizant.cognizantits.engine.commands.General;
import com.cognizant.cognizantits.engine.core.CommandControl;
import com.cognizant.cognizantits.engine.core.Control;
import com.cognizant.cognizantits.engine.execution.exception.element.ElementException;
import com.cognizant.cognizantits.engine.execution.exception.element.ElementException.ExceptionType;
import com.cognizant.cognizantits.engine.support.Status;
import com.cognizant.cognizantits.engine.support.methodInf.Action;
import com.cognizant.cognizantits.engine.support.methodInf.InputType;
import com.cognizant.cognizantits.engine.support.methodInf.ObjectType;

public class Custom extends General {

	public Custom(CommandControl cc) {
		super(cc);
	}

	@Action(object = ObjectType.BROWSER, desc = "Print Input and Condition", input = InputType.YES, condition = InputType.YES)
	public void PrintInputCondition() {
		System.out.println("Input is " + Input);
		System.out.println("Condition is " + Condition);
		System.out.println("Data is" + Data);
		Report.updateTestLog(Action, "[" + Input + "]" + ",[" + Data + "]" + ",[" + Condition + "]", Status.DONE);

	}
	
	@Action(object = ObjectType.BROWSER, desc = "Returns Absolute Path", input = InputType.NO, condition = InputType.NO)
	public void returnAbsolutePath() {
		String uploadLocation = getUserDefinedData("uploadLocation");
		String projectLocation = Control.getCurrentProject().getLocation();
		String absolutePath = projectLocation + "/" + uploadLocation;
		
		addVar("%absPath%",absolutePath);
		
		Report.updateTestLog(Action, "Path : ["+absolutePath+"] generated" , Status.DONE);

	}

}