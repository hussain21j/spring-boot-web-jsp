package com.controller.exaptions;

/**
 * Exception when no data available in the repository
 * @author Tayab Hussain
 * @version 1.0
 */

public class NoSortItemAvailableException extends Exception {
	private static final long serialVersionUID = 1L;
	private String errorMessage;

	public NoSortItemAvailableException(String errorMessage) {
		super();
		this.errorMessage = errorMessage;
	}

	public String getErrorMessage() {
		return errorMessage;
	}

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}
}
