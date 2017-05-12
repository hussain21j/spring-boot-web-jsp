package com.controller.util;

import java.util.Comparator;
import com.controller.model.SortDataInfo;

/**
 * This class is comparator class responsible for the sorting the SortDataInfo
 * objects in reverse order or there id * 
 * @author Tayab Hussain
 * @version 1.0
 */
public class SortDataInfoComparator implements Comparator<SortDataInfo> {

	/**
	 * Compare two objects
	 */
	@Override
	public int compare(SortDataInfo sortDataInfo1, SortDataInfo sortDataInfo2) {
		if (sortDataInfo1.getId() == sortDataInfo2.getId())
			return 0;
		else if (sortDataInfo1.getId() > sortDataInfo2.getId())
			return -1;
		else
			return 1;
	}

}
