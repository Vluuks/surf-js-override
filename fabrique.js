// var Fabrique = function() {

//   this.totalFileSize = 0;
//   this.totalCompletedBytes = 0;

//   this.previousBytes = 0;

//   // Calculate the size in bytes of all the files
//   this.updateTotalFileSize = function(fileSize) {
//     if (!isNaN(fileSize)) {
//       totalFileSize += fileSize;
//     }
//     console.log(totalFileSize);
//   }

//   // Calculate the total amount of bytes uploaded across files
//   this.updateTotalProgress = function(completedBytes, fileSize) {
//     console.log(completedBytes);
//     previousBytes = completedBytes;

//     // Add the new progress to the total
//     totalCompletedBytes += (completedBytes - previousBytes);
//     console.log(totalCompletedBytes);
//   }

// }