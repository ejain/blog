---
title: Using Java to Read Excel Files
categories:
  - Tech
---

I recently needed to add support for extracting data from Excel files (which are still ubiquitous in labs) to a Java application.

First I tried using [POI-HSSF](http://poi.apache.org/hssf/) (a well-known Apache project). The code is reasonably straightforward -- though I had to get it from tutorials on the Web as I couldn't find much in terms of documentation on their site, and the API isn't exactly self-evident:

```
POIFSFileSystem fs = new POIFSFileSystem(in);
HSSFWorkbook wb = new HSSFWorkbook(fs);
HSSFSheet sheet = wb.getSheetAt(0);
Iterator rows = sheet.rowIterator();
while (rows.hasNext()) {
    HSSFRow row = (HSSFRow) rows.next();
    Iterator cells = row.cellIterator();
    List<string> fields = new ArrayList<string>();
    while (cells.hasNext()) {
        HSSFCell cell = (HSSFCell) cells.next();
        switch (cell.getCellType()) {
            case HSSFCell.CELL_TYPE_STRING:
                fields.add(cell.getStringCellValue());
                break;
            case HSSFCell.CELL_TYPE_NUMERIC:
                fields.add(Double.toString(cell.getNumericCellValue()));
                break;
            default:
                log.warn("Unsupported cell type: " + cell.getCellType());
                break;
        }
    }
    process(fields);
}
```

This works fine -- except that there doesn't seem to be a way to keep the precision of numbers, i.e. if you don't want to convert "4" to "4.0"! Fortunately POI isn't the only game in town. I ended up using [JExcel API](http://jexcelapi.sourceforge.net/) which has a much simpler API (and behaves the way I want it to):

```
Workbook workbook = Workbook.getWorkbook(in);
Sheet sheet = workbook.getSheet(0);
for (int i = 0; i < sheet.getRows(); ++i) {
    List<string> fields = new ArrayList<string>();
    for (int j = 0; j < sheet.getColumns(); ++j) {
        fields.add(sheet.getCell(j, i).getContents());
    }
    process(fields);
}
```
